package com.ambokilecodebuffer.cryptoAPI.controller;

import com.ambokilecodebuffer.cryptoAPI.entity.History;
import com.ambokilecodebuffer.cryptoAPI.model.HistoryRequest;
import com.ambokilecodebuffer.cryptoAPI.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("history")
public class HistoryController {
    private final HistoryService historyService;

    @Autowired

    public HistoryController(HistoryService historyService) {
        this.historyService = historyService;
    }

    @PostMapping("/createHistory")
    public ResponseEntity<History> createHistory(@RequestBody HistoryRequest historyRequest){
        History createdHistory = this.historyService.createHistory(historyRequest);
        return new ResponseEntity<History>(createdHistory, HttpStatus.CREATED);
    }
}
