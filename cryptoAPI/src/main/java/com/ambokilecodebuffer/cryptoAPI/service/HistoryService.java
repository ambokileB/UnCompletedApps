package com.ambokilecodebuffer.cryptoAPI.service;

import com.ambokilecodebuffer.cryptoAPI.entity.History;
import com.ambokilecodebuffer.cryptoAPI.model.HistoryRequest;

public interface HistoryService {

    public History createHistory(HistoryRequest historyRequest);
}
