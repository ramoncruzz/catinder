package com.catinder;

import android.content.Context;

import androidx.annotation.RawRes;

import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.ReactCookieJarContainer;

import java.io.IOException;
import java.io.InputStream;
import java.security.KeyException;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.cert.CertificateException;
import java.util.Arrays;

import javax.inject.Inject;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;

import okhttp3.OkHttpClient;

public class RawCertificatePinner implements OkHttpClientFactory {
    private static final String CERTIFICATE_TYPE = "BKS";
    private static final String DEFAULT_TLS_VERSION = "TLSv1.2";

    private final Context context;
    @RawRes
    private final int certificate;
    private final String certificatePassword;

    @Inject
    public RawCertificatePinner(Context context, int certificate, String certificatePassword) {
        this.context = context;
        this.certificate = certificate;
        this.certificatePassword = certificatePassword;
    }

    public OkHttpClient.Builder pinCertificate(OkHttpClient.Builder okhttpBuilder){
        final KeyStore trustedCertificate = getTrustedCertificate();
        final TrustManagerFactory trustManagerFactory = getTrustManagerFactory(trustedCertificate);
        final SSLContext sslContext = getSSLContext(trustManagerFactory);
        X509TrustManager trustManager = getX509TrustManager(trustManagerFactory);
        okhttpBuilder.sslSocketFactory(sslContext.getSocketFactory(), trustManager);
        return okhttpBuilder;
    }

    private KeyStore getTrustedCertificate() {
        KeyStore trusted = null;
        InputStream in = null;
        try {
            trusted = KeyStore.getInstance(CERTIFICATE_TYPE);
        } catch (KeyStoreException e) {
            e.printStackTrace();
        }
        in = context.getResources().openRawResource(certificate);
        try {
            trusted.load(in,certificatePassword.toCharArray());
        } catch (CertificateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } finally {
            if(in != null){
                try {
                    in.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return  trusted;
    }
    private TrustManagerFactory getTrustManagerFactory(KeyStore trustedCertificate) {
        TrustManagerFactory trustManagerFactory = null;

        try {
            trustManagerFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        try {
            trustManagerFactory.init(trustedCertificate);
        } catch (KeyStoreException e) {
            e.printStackTrace();
        }

        return  trustManagerFactory;
    }

    private SSLContext getSSLContext(TrustManagerFactory trustManagerFactory) {
        SSLContext sslContext = null;

        try {
            sslContext = SSLContext.getInstance(DEFAULT_TLS_VERSION);
            sslContext.init(null, trustManagerFactory.getTrustManagers(), null);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (KeyManagementException e) {
            e.printStackTrace();
        }

        return sslContext;
    }

    private X509TrustManager getX509TrustManager(TrustManagerFactory trustManagerFactory) {
        final TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();

        if(trustManagers == null || trustManagers.length !=1 || !(trustManagers[0] instanceof  X509TrustManager)){
            final  IllegalStateException e = new IllegalStateException( "wrong trust manager:" + Arrays.toString(trustManagers));
        }
        return (X509TrustManager) trustManagers[0];
    }

    @Override
    public OkHttpClient createNewNetworkModuleClient() {
//      OkHttpClient.Builder builder = new OkHttpClient.Builder();
        OkHttpClient.Builder builder = new OkHttpClient.Builder().cookieJar(new ReactCookieJarContainer());
        return this.pinCertificate(builder).build();
    }
}
