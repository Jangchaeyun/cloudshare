package com.cherry.cloudshareapi.security;

import java.net.URL;
import java.security.PublicKey;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

@Component
public class ClerkJwksProvider {
	
	@Value("${clerk.jwks-url}")
	private String jwksUrl;
	
	private final Map<String, PublicKey> keyCache = new HashMap<>();
	private long lastFetchTime = 0;
	private static final long CACHE_TTL = 3600000; // 1 hour
	
	public PublicKey getPublicKey(String kid) throws Exception {
		if (keyCache.containsKey(kid) && System.currentTimeMillis() - lastFetchTime < CACHE_TTL) {
			return keyCache.get(kid);
		}
		
		refreshKeys();
		return keyCache.get(kid);
	}

	private void refreshKeys() throws Exception {
		ObjectMapper mapper = new ObjectMapper();
		JsonNode jwks = mapper.readTree(new URL(jwksUrl));
		
		JsonNode keys = jwks.get("keys");
		
		for (JsonNode keyNode: keys) {
			keyNode.get(0)
		}
	}
}
