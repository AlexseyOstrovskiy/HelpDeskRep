package com.company.entity;

import javax.persistence.*;

@Entity
@Table
public class Attachment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column
    private String blob;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    private Ticket ticketFromAttachment;

    @Column
    private String name;

    public Attachment(){
    }

    public Attachment(int id, String blob, Ticket ticketFromAttachment, String name) {
        this.id = id;
        this.blob = blob;
        this.ticketFromAttachment = ticketFromAttachment;
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBlob() {
        return blob;
    }

    public void setBlob(String blob) {
        this.blob = blob;
    }

    public Ticket getTicketFromAttachment() {
        return ticketFromAttachment;
    }

    public void setTicketFromAttachment(Ticket ticketFromAttachment) {
        this.ticketFromAttachment = ticketFromAttachment;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
