﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DRRR.Server.Dtos
{
    /// <summary>
    /// 创建房间响应DTO
    /// </summary>
    public class ChatRoomCreateResponseDto
    {
        /// <summary>
        /// 房间ID
        /// </summary>
        public string RoomId { get; set; }

        /// <summary>
        /// 错误信息
        /// </summary>
        public string Error { get; set; }

        /// <summary>
        /// 是否在发生错误时关闭模态框
        /// </summary>
        public bool CloseModalIfError { get; set; }
    }
}
