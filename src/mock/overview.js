import Mock from './mock'

const { mock } = Mock

export const GetTopic = mock('/api/home/gettopic', 'get', {
    code: 0,
    data: {
        topiclist: [
            {
                uid: '1',
                tid: '1',
                name: '俯冲',
                tel: 18888888832,
                mail: 'fuchong@uestc.com',
                department: '信息与软件工程学院',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字信息处理', '系统与技术'],
                grade: ['大一', '大二', '大三', '大四'],
                mession: '擦擦擦测测',
                status: 1
            },
            {
                uid: '2',
                tid: '2',
                name: '王伟的',
                tel: 18999998842,
                mail: 'fuchong@uestc.com',
                department: '信息与软件工程学院',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫'],
                grade: ['大一'],
                mession: '擦擦擦测测',
                status: 1
            },
            {
                tid: '3',
                uid: '3',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                department: '信息与软件工程学院',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫', '网络安全'],
                grade: ['大一', '大二'],
                mession: '擦擦擦测测',
                status: 0
            },
            {
                uid: '4',
                tid: '4',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                department: '信息与软件工程学院',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫'],
                grade: ['不限'],
                mession: '擦擦擦测测',
                status: 0
            },
            {
                uid: '5',
                tid: '5',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                department: '信息与软件工程学院',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫', '数字信息处理'],
                grade: ['大一'],
                mession: '擦擦擦测测',
                status: 1
            },
            {
                uid: '6',
                tid: '6',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                department: '信息与软件工程学院',
                status: 0,
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫'],
                grade: ['大一'],
                mession: '擦擦擦测测'
            }
        ]
    },
    msg: ''
})

export const DeleteTopic = mock('/api/home/deletetopic', {
    code: 0,
    data: {},
    msg: ''
})
