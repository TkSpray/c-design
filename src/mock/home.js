import Mock from './mock'

const { mock } = Mock

export const GetTopic = mock('/topic/get-by-teacher', 'get', {
    code: 0,
    msg: '',
    data: {
        todo: 20,
        done: 30,
        topiclist: [
            {
                uid: '1',
                tid: '1',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字信息处理', '系统与技术'],
                grade: ['大一', '大二', '大三', '大四'],
                mession:
                    '擦擦擦测测擦擦擦测测擦擦擦测擦擦擦测测擦擦擦测测擦擦擦测测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测擦擦擦测测',
                status: 1
            },
            {
                uid: '2',
                tid: '2',
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫'],
                grade: ['大一'],
                mession: '擦擦擦测测',
                status: 1
            },
            {
                uid: '3',
                tid: '3',
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
                topic: '后台管理系统',
                course: '综合课程设计I',
                direction: ['数字动漫'],
                grade: ['大一'],
                mession: '擦擦擦测测',
                status: 0
            }
        ]
    }
})

export const GetMember = mock('/student/get-by-topic', 'get', {
    code: 0,
    msg: '',
    data: {
        stulist: [
            {
                name: '俯冲',
                stuId: 2018091608000,
                direction: '数字信息处理',
                score: 80,
                url: '22',
                children: [
                    {
                        name: '王伟的',
                        stuId: 2018091608000,
                        direction: '数字动漫',
                        score: 20
                    },
                    {
                        name: '张翔',
                        stuId: 2018091608000,
                        direction: '网络安全',
                        score: 30
                    }
                ]
            },
            {
                name: '王伟的',
                stuId: 2018091608000,
                direction: '数字动漫',
                score: 20,
                url: '333',
                children: []
            },
            {
                name: '张翔',
                stuId: 2018091608000,
                direction: '网络安全',
                score: 40,
                url: '',
                children: []
            },
            {
                name: '张翔',
                stuId: 2018091608000,
                direction: '数字动漫',
                score: 50,
                url: '',
                children: []
            },
            {
                name: '张翔',
                stuId: 2018091608000,
                direction: '数字信息处理',
                score: 20,
                url: '',
                children: []
            }
        ]
    }
})

export const Release = mock('/student/add-score', {
    code: 0,
    data: {},
    msg: ''
})
