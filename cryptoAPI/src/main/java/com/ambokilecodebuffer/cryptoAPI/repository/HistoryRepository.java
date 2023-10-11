package com.ambokilecodebuffer.cryptoAPI.repository;

import com.ambokilecodebuffer.cryptoAPI.entity.History;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History,Long> {
}
