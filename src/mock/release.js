import Mock from './mock'

const { mock } = Mock

export const Release = mock('/api/topic/add', {
    code: 0,
    data: {},
    msg: ''
})
