package com.company.entity;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @ManyToOne
    @JoinColumn(name="user_id")
    private User user;

    @Column
    private String text;

    @Column
    private LocalDate data;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticketFromComments;

    public Comment(){
    }

    public Comment(int id, User user, String text, LocalDate data, Ticket ticketFromComments) {
        this.id = id;
        this.user = user;
        this.text = text;
        this.data = data;
        this.ticketFromComments = ticketFromComments;
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

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public Ticket getTicketFromComments() {
        return ticketFromComments;
    }

    public void setTicketFromComments(Ticket ticketFromComments) {
        this.ticketFromComments = ticketFromComments;
    }
}
