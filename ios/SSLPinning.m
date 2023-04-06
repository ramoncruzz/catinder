//
//  SSLPinning.m
//  Catinder
//
//  Created by Ramon Cruz on 02/08/22.
//

#import "SSLPinning.h"
#import <TrustKit/TrustKit.h>

@implementation SSLPinning

- (void)pinning{
  NSString *thecatapi_pk1 = [NSString stringWithFormat:@"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj6EGeFewIDq7+vh4z34H"
                             "63JHgRh5JjMiVecRu/Hk+icgCfpQBkgGP5YPEHWe5W0KNxkJaT+Rk3sye7ZPV4FK"
                             "FjqLqO0gX0FPsDk91L+aEahwnltOSbqOljrru90EyTgOmTZOT6Al6ii9qV63VvgT"
                             "22V/7DtHY+jWQRxFiBS2KX4x5SuN94rhX5CPLn4eUEY/FhM+Xi0grX+ztpzgWGFt"
                             "mq0hXn+w36Kj8lU6aO11yEdv/nRPVuRwFzSXkZAHlRUFiqjx6xFdCcVuu6/dibiv"
                             "7q44Mx47MKG6vXE8FrS6HRzvfW3U/JqM0wta07O5F7c8qjxx88xPMCrxL/K/GidD"
                             "+QIDAQAB"];
  NSDictionary *trustKitConfig =
  @{
    // The list of domains we want to pin and their configuration
    kTSKPinnedDomains: @{
            
            @"api.thecatapi.com" : @{
                    // Pin all subdomains
                    kTSKIncludeSubdomains:@YES,
                    
                    // Do not block connections if pinning validation failed so the App doesn't break
                    kTSKEnforcePinning:@NO,
                    // The pinned public keys' Subject Public Key Info hashes
                    kTSKPublicKeyHashes : @[@"47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU="],
                    }
    }
    
  };
  [TrustKit initSharedInstanceWithConfiguration:trustKitConfig];

}
@end
