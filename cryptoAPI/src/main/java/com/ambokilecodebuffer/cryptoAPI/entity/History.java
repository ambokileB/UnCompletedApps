package com.ambokilecodebuffer.cryptoAPI.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class History {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;

    private String operationType;
    private String amount;

    public Long getHistoryId() {
        return historyId;
    }

    public void setHistoryId(Long historyId) {
        this.historyId = historyId;
    }

    public String getOperationType() {
        return operationType;
    }

    public void setOperationType(String operationType) {
        this.operationType = operationType;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public History() {
    }

    public History(Long historyId, String operationType, String amount) {
        this.historyId = historyId;
        this.operationType = operationType;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "History{" +
                "historyId=" + historyId +
                ", operationType='" + operationType + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
