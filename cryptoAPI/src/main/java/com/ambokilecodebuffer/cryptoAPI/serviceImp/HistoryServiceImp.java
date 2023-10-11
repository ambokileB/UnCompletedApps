package com.ambokilecodebuffer.cryptoAPI.serviceImp;

import com.ambokilecodebuffer.cryptoAPI.entity.History;
import com.ambokilecodebuffer.cryptoAPI.model.HistoryRequest;
import com.ambokilecodebuffer.cryptoAPI.repository.HistoryRepository;
import com.ambokilecodebuffer.cryptoAPI.service.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HistoryServiceImp implements HistoryService {

    private final HistoryRepository historyRepository;
    @Autowired
    public HistoryServiceImp(HistoryRepository historyRepository) {
        this.historyRepository = historyRepository;
    }

    @Override
    public History createHistory(HistoryRequest historyRequest) {
        History history = new History();

        history.setOperationType(historyRequest.getOperationType());
        history.setAmount(historyRequest.getAmount());


        return historyRepository.save(history);
    }
}
