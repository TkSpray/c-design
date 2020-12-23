# 综合课程设计

## 状态码

|  值  |   含义   | 备注 |
| :--: | :------: | :--: |
|  0   |   正常   |      |
|  -1  | 登录失败 |      |


##登录页面

#### 登录

@request

```json
{
    URL: "",
    method: "get",
    param: {
      	username:String //用户名
      	password:String //密码
    }
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {
      name: String, //用户名称
      uid:String,//用户ID
      role: Boolean, //管理员状态，false->非管理员，true->管理员
    }
}
```

##管理页

### 主页

#### 拉取主页数据(我的课题)

@request

```json
{
    URL: "",
    method: "get",
    param: {
      	uid:String//用户id
    }
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {
      todo:Number//未完成课题数
      done:Number//完成课题数
      topiclist:[
      	{
      		tid:String//课题id
      		topic:String//课题名称,
      		course:String//课程名称,"综合课程设计I","综合课程设计II","综合课程设计III"
      		direction:[]//所属专业,"不限","系统与技术","数字动漫","网络安全","数字信息处理","嵌入式技术"
      		grade:[],//选课年级,"不限","大一","大二","大三","大四"
  				mession:String//主要任务
      		status:Number//课题打分完成情况,
					uid:String//教师id
    		},
  			...
  		]
    }
}
```

#### 删除课题

@request

``` json
{
    URL: "",
    method: "get",
    param: {
      	tid:String//课题id
    }
}
```

@return

``` json
{
    status_code: Number,
    msg: String,
    data: {}
}
```

#### 拉取课题成员详情

@request

```json
{
    URL: "",
    method: "get",
    param: {
      	tid:String//课题id
    }
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {
      stulist:[
      	{
      		name:String//学生姓名
          stuId:String//学号
          direction:String//专业方向
          score:Number//分数
          url:String//如果已经上传材料则传材料url，未上传传空字符串""
          children:[
          	{
          		name:String//学生姓名
          		stuId:String//学号
          		direction:String//专业方向
          		score:Number//分数
       			},
        		...
          ]//组员信息(无url和children字段)
    		},
  			...
  		]
    }
}
```

#### 打分

@request

```json
{
    URL: "",
    method: "post",
    param: {
      	student:[
          {
            name:String//学生姓名
            stuId:String//学号
            score:Number//分数
          },
          ...
        ]
    }
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {}
}
```



###课题总览页

#### 拉取课题列表

@request

```json
{
    URL: "",
    method: "get",
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {
      topiclist:[
      	{
      		tid:String//课题id
      		topic:String//课题名称,
      		course:String//课程名称,"综合课程设计I","综合课程设计II","综合课程设计III",
      		direction:[]//所属专业,"不限","系统与技术","数字动漫","网络安全","数字信息处理","嵌入式技术"
      		grade:[],//选课年级,"不限","大一","大二","大三","大四"
  				mession:String//主要任务
      		status:Number//课题打分完成情况
  				uid:String//教师id
      		name:String//教师姓名
      		tel:String//教师手机号
      		mail:String//教师邮箱
    		},
  			...
  		]
    }
}
```

#### 删除课题

@request

``` json
{
    URL: "",
    method: "get",
    param: {
      	tid:String//课题id
    }
}
```

@return

``` json
{
    status_code: Number,
    msg: String,
    data: {}
}
```

### 课题发布页面

#### 任务书上传

@request

```json
{
    URL: "",
    method: "post",
    param: {}
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {
      url:String//上传成功返回文件url
    }
}
```

#### 课题发布

@request

```json
{
    URL: "",
    method: "post",
    param: {
      	tid:String//课题id
      	topic:String//课题名称,
      	course:String//课程名称,"综合课程设计I","综合课程设计II","综合课程设计III",
      	direction:[]//所属专业,"不限","系统与技术","数字动漫","网络安全","数字信息处理","嵌入式技术"
      	grade:[],//选课年级,"不限","大一","大二","大三","大四"
  			mession:String//主要任务,
				url:String//任务书url，
				uid:String//教师id
    }
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {}
}
```

### 用户管理页面

#### 拉取用户列表

@request

```json
{
    URL: "",
    method: "get",
  	param:{}
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {
      userlist:[
      	{
          uid:String//教师唯一标识
      		name:String//教师姓名
      		tel:String//教师手机号
      		mail:String//教师邮箱
          role:Boolean, //管理员状态，false->非管理员，true->管理员
    		},
  			...
  		]
    }
}
```

#### 修改用户信息

@request

``` json
{
    URL: "",
    method: "post",
  	param:{
  				uid:String//教师id
      		name:String//教师姓名
      		tel:String//教师手机号
      		mail:String//教师邮箱
          role:Boolean, //管理员状态，false->非管理员，true->管理员
      		password:String//账户登录密码
  	}
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {}
}
```

#### 新增用户

@request

``` json
{
    URL: "",
    method: "post",
  	param:{
      		name:String//教师姓名
      		tel:String//教师手机号(用作账户登录用户名)
      		mail:String//教师邮箱
          role:Boolean, //管理员状态，false->非管理员，true->管理员
      		password: String//账户登录密码
  	}
}
```

@return

```json
{
    status_code: Number,
    msg: String,
    data: {}
}
```

#### 删除用户

@request

``` json
{
    URL: "",
    method: "get",
    param: {
      	uid:String//教师id
    }
}
```

@return

``` json
{
    status_code: Number,
    msg: String,
    data: {}
}
```

### 