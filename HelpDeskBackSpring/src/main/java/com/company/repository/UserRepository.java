package com.company.repository;

import com.company.entity.User;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class UserRepository {

    @PersistenceContext
    EntityManager entityManager;


    public List<User> getAll() {
        return entityManager.createQuery("from User",User.class).getResultList();
    }
}
