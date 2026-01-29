package in.sally.cloudshareapi.repository;

import in.sally.cloudshareapi.document.UserCredits;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserCreditsRepository extends MongoRepository<UserCredits, String> {

}
