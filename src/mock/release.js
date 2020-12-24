import Mock from './mock'

const { mock } = Mock

export const Release = mock('/api/home/release', {
    code: 0,
    data: {},
    msg: ''
})
