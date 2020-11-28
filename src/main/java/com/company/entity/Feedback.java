package com.company.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column
    private  String rate;

    @Column
    private LocalDate date;

    @Column
    private String text;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticket;


    public Feedback(){
    }

    public Feedback(int id, User user, String rate, LocalDate date, String text, Ticket ticket) {
        this.id = id;
        this.user = user;
        this.rate = rate;
        this.date = date;
        this.text = text;
        this.ticket = ticket;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Ticket getTicket() {
        return ticket;
    }

    public void setTicket(Ticket ticket) {
        this.ticket = ticket;
    }
}

