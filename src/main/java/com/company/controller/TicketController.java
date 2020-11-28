package com.company.controller;

import com.company.entity.Ticket;
import com.company.service.TicketService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TicketController {
    TicketService ticketService;
    public TicketController(TicketService ticketService){this.ticketService = ticketService;}

    @GetMapping("tickets")
    public List<Ticket> getAll(){return ticketService.getAll();}
}
