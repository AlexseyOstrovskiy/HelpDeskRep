package com.company.service;

import com.company.entity.Ticket;
import com.company.repository.TicketRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TicketService {
    TicketRepository ticketRepository;

    public TicketService(TicketRepository ticketRepository){this.ticketRepository = ticketRepository;}

    public List<Ticket> getAll(){return ticketRepository.getAll();}
}
