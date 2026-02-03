package in.sally.cloudshareapi.repository;

import in.sally.cloudshareapi.document.FileMetadataDocument;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FileMetadataRepository extends MongoRepository<FileMetadataDocument, String> {
    List<FileMetadataDocument> findBClerkId(String clerkId);

    Long countByClerkId(String clerkId);
}
