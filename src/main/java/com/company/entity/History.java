package com.company.entity;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table
public class History {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;

    @Column
    private LocalDate date;

    @Column
    private String action;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private String description;

    public  History(){
    }

    public History(int id, Ticket ticket, LocalDate date, String action, User user, String description) {
        this.id = id;
        this.ticket = ticket;
        this.date = date;
        this.action = action;
        this.user = user;
        this.description = description;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
