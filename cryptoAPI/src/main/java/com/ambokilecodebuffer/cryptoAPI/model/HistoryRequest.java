package com.ambokilecodebuffer.cryptoAPI.model;

public class HistoryRequest {
    private String operationType;
    private String amount;
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

    public HistoryRequest() {
    }

    public HistoryRequest(String operationType, String amount) {
        this.operationType = operationType;
        this.amount = amount;
    }

    @Override
    public String toString() {
        return "HistoryRequest{" +
                "operationType='" + operationType + '\'' +
                ", amount='" + amount + '\'' +
                '}';
    }
}
