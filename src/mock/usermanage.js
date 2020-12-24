import Mock from './mock'

const { mock } = Mock

export const GetUser = mock('/user/get-all', 'get', {
    code: 0,
    data: {
        userlist: [
            {
                uid: '1',
                name: '俯冲',
                tel: 18888888832,
                mail: 'fuchong@uestc.com',
                role: true
            },
            {
                uid: '2',
                name: '王伟的',
                tel: 18999998842,
                mail: 'fuchong@uestc.com',
                role: true
            },
            {
                uid: '3',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                role: false
            },
            {
                uid: '4',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                role: false
            },
            {
                uid: '5',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                role: true
            },
            {
                uid: '6',
                name: '张翔',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                role: false
            },
            {
                uid: '7',
                name: '张翔222',
                tel: 17788889932,
                mail: 'fuchong@uestc.com',
                role: true
            }
        ]
    },
    msg: ''
})

export const AddUser = mock('/user/add', 'post', {
    code: 0,
    data: {},
    msg: ''
})

export const DeleteUser = mock('/user/delete', {
    code: 0,
    data: {},
    msg: ''
})

export const EditUser = mock('/user/alter', {
    code: 0,
    data: {},
    msg: ''
})
