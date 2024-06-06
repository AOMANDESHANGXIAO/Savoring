// 定义HelloItem接口，包含text和answerList属性
interface WelcomeItem {
    prompt: string
    responses: string[]
}

// 创建一个welcomeList数组，包含多个WelcomeItem对象
const welcomeList: WelcomeItem[] = [
    {
        prompt: '哈喽，欢迎来到赛沃灵心理',
        responses: [],
    },
    {
        prompt: '我是赛沃灵，很高兴认识你，下面请让我来带领你开启幸福之旅。',
        responses: [],
    },
    {
        prompt: '在开始之前，我需要先问你几个问题，答案不分对错，越真实越好。请你放心，所有问题的答案都将遵循隐私保护原则。',
        responses: [],
    },
    {
        prompt: '请问你的年龄是',
        responses: [],
    },
    {
        prompt: '你近两周以来心情如何呢？',
        responses: [
            '每天都很开心',
            '平平常常吧',
            '不开心的时间会多一些',
            '大部分时间都不太开心',
        ],
    },
    {
        prompt: '你近两周以来睡眠情况如何呢？',
        responses: [
            '每天醒来都感觉精力充沛',
            '作息规律，能正常休息',
            '感觉休息地不太好',
            '大部分夜晚都在失眠中度过',
        ],
    },
    {
        prompt: '你近两周以来吃得怎么样呢？',
        responses: [
            '胃口不错，吃得很愉快',
            '不好不坏',
            '无法控制,时而吃得多,时而吃得少',
        ],
    },
    {
        prompt: '你近两周以来人际交往情况如何呢？',
        responses: [
            '无论是社交还是独处，我都很开心',
            '不好不坏',
            '回避人际交往或者在不断的活动中麻痹自己',
        ],
    },
    {
        prompt: '我对你的情况已经大致了解了，很高兴你能信任我，下面让我们共同踏上心的旅途吧',
        responses: [],
    },
]

// 导出welcomeList
export { welcomeList }
