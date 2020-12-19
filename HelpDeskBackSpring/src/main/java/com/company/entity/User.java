package com.company.entity;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "first_name")
    private String firstName;

    private String lastName;

    @Column(name = "role_id")
    @Enumerated(EnumType.STRING)
    private RoleEnum roleId;

    private String email;

    private String password;

    @OneToMany(mappedBy = "assigneerId")
    private List <Ticket> assigneerIdList = new ArrayList<>();

    @OneToMany(mappedBy = "ownerId")
    private List <Ticket> ownerIdList = new ArrayList<>();

    @OneToMany(mappedBy = "approverId")
    private List <Ticket>  approverIdList = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List <Comment> userIdList = new ArrayList<>();






    public User (){
    }

    public User(int id, String firstName, String lastName, RoleEnum roleId, String email, String password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.email = email;
        this.password = password;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public RoleEnum getRoleId() {
        return roleId;
    }

    public void setRoleId(RoleEnum roleId) {
        this.roleId = roleId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


}
