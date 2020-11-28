package com.company.testPacage;

import com.company.entity.Ticket;
import org.springframework.http.converter.json.GsonBuilderUtils;

public class Main {
    public void print(){
        Ticket ticketTest = new Ticket(1, "ticketTest", "ewfwe", "dwdwqwd", 15.12,1,2,3,4,5,6);
        String nameTicket = ticketTest.getDescription();
        System.out.println(nameTicket);

    }
}
