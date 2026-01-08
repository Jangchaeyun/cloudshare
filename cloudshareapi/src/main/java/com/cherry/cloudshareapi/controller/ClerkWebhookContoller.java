package com.cherry.cloudshareapi.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/webhook")
@RequiredArgsConstructor
public class ClerkWebhookContoller {
	
	@Value("${clerk.webhook.secret}")
	private String webhookSecret;
	
	@PostMapping("/clerk")
	public ResponseEntity<?> handleClerkWebhook(@RequestHeader("svix-id") String svixId, @RequestHeader("svix-timestamp") String svixTimestamp, @RequestHeader("svix-signature") String svixSignature, @RequestHeader String payload) {
		try {
			 boolean isValid = verifyWebhookSignature(svixId, svixTimestamp, svixSignature, payload);
			 if (!isValid) {
				 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid webhook signature");
			 }
			 ObjectMapper mapper = new ObjectMapper();
			 JsonNode rootNode = mapper.readTree(payload);
			 
			 String eventType = rootNode.path("type").asText();
			 
			 switch (eventType) {
			 
			 }
		} catch (Exception e) {
			// TODO: handle exception
		}
	}

	private boolean verifyWebhookSignature(String svixId, String svixTimestamp, String svixSignature, String payload) {
		// validate the signature
		return true;
	}
}
