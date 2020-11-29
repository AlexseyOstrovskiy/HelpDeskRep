package com.company.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int id;

    @Column(name = "ticket_Name")
    private String name;

    @Column
    private String description;

    @Column
    private String createdOn;

    @Column
    private LocalDate ticketDate;

    @ManyToOne
    @JoinColumn(name = "assineer_id")
    private User assigneerId;


    @ManyToOne
    @JoinColumn(name = "owner_id")
    private User ownerId;

    @Column
    private StateEnum sateId;


    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

    @Column
    private UrgencyEnum urgencyId;


    @ManyToOne
    @JoinColumn(name = "approver_id")
    private User approverId;

    @Column
    @OneToMany(mappedBy = "ticket")
    private List<Feedback> ticketList  = new ArrayList<>();

    @Column
    @OneToMany(mappedBy = "ticketFromComments")
    private List <Comment> ticketListFromComment = new ArrayList<>();

    @Column
    @OneToMany(mappedBy = "ticketFromAttachment")
    private List <Attachment> ticketListFromAttachment = new ArrayList<>();



    public Ticket (){
    }

    public Ticket(int id, String name, String description, String createdOn, LocalDate ticketDate, User assigneerId, User ownerId, StateEnum sateId, Category categoryId, UrgencyEnum urgencyId, User approverId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdOn = createdOn;
        this.ticketDate = ticketDate;
        this.assigneerId = assigneerId;
        this.ownerId = ownerId;
        this.sateId = sateId;
        this.categoryId = categoryId;
        this.urgencyId = urgencyId;
        this.approverId = approverId;
    }

    public Ticket(int id, String ticketTest, String ewfwe, String dwdwqwd, double v, int i, int i1, int i2, int i3, int i4, int i5) {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }

    public LocalDate ticketDate() {
        return ticketDate;
    }

    public void setDesiredResolutionDate(LocalDate desiredResolutionDate) {
        this.ticketDate = ticketDate;
    }

    public User getAssigneerId() {
        return assigneerId;
    }

    public void setAssigneerId(User assigneerId) {
        this.assigneerId = assigneerId;
    }

    public User getOwnerId() {
        return ownerId;
    }

    public void setOwnerId(User ownerId) {
        this.ownerId = ownerId;
    }

    public StateEnum getSateId() {
        return sateId;
    }

    public void setSateId(StateEnum sateId) {
        this.sateId = sateId;
    }

    public Category getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Category categoryId) {
        this.categoryId = categoryId;
    }

    public UrgencyEnum getUrgencyId() {
        return urgencyId;
    }

    public void setUrgencyId(UrgencyEnum urgencyId) {
        this.urgencyId = urgencyId;
    }

    public User getApproverId() {
        return approverId;
    }

    public void setApproverId(User approverId) {
        this.approverId = approverId;
    }


}
