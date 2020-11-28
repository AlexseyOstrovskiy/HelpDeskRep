package com.company.repository;

import com.company.entity.Ticket;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class TicketRepository {
    @PersistenceContext
    EntityManager entityManager;

    public List<Ticket> getAll(){return entityManager.createQuery("from Ticket", Ticket.class).getResultList();}
}
