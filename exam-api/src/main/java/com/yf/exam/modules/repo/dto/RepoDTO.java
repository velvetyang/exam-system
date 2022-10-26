package com.yf.exam.modules.repo.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

import java.io.Serializable;
import java.util.Date;

/**
* <p>
* 题库请求类
* </p>
*
* @author velvet
* @since 2022-05-25 13:23
*/
@Data
@ApiModel(value="题库", description="题库")
public class RepoDTO implements Serializable {

    private static final long serialVersionUID = 1L;


    @ApiModelProperty(value = "题库ID", required=true)
    private String id;

    @ApiModelProperty(value = "题库编号", required=true)
    private String code;

    @ApiModelProperty(value = "题库名称", required=true)
    private String title;

    @ApiModelProperty(value = "单选数量", required=true)
    private Integer radioCount;

    @ApiModelProperty(value = "多选数量", required=true)
    private Integer multiCount;

    @ApiModelProperty(value = "判断数量", required=true)
    private Integer judgeCount;


    @ApiModelProperty(value = "题库备注", required=true)
    private String remark;

    @ApiModelProperty(value = "创建时间", required=true)
    private Date createTime;

    @ApiModelProperty(value = "更新时间", required=true)
    private Date updateTime;
    
}
