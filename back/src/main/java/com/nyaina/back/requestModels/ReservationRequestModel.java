package com.nyaina.back.requestModels;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class ReservationRequestModel {
    private Integer id_place;
    private Integer id_user;
    private Date date_deb;
    private Date date_fin;
}