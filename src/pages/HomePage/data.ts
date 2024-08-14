import { ButtonGroupProps } from '@/types/interface'
import type { GIFStatus } from '@/types/type'
interface IntroItem {
  prompt: string
  type: ButtonGroupProps['type']
  responses: string[]
  placeholder?: string // type为input时的placeholder
  status: GIFStatus // 水嘟嘟的图片状态
}

const introList: IntroItem[] = [
  {
    prompt: '你好，欢迎来到赛沃灵世界',
    type: 'button',
    responses: ['你好'],
    status: 'suprise'
  },
  {
    prompt: '我叫水嘟嘟',
    type: 'button',
    responses: ['真可爱的名字'],
    status: 'suprise'
  },
  {
    prompt: '我叫赛沃灵，是一种能帮助你把幸福事件转化成幸福体验的精灵',
    responses: ['谢谢你'],
    type: 'button',
    status: 'flower'
  },
  {
    prompt: '在进入赛沃灵世界之前，我需要先问你几个问题。',
    responses: ['好的'],
    type: 'button',
    status: 'suprise'
  },
  {
    prompt: '请问你的年龄是',
    responses: [],
    type: 'input',
    placeholder: '请输入你的年龄',
    status: 'suprise'
  },
  {
    prompt: '你近两周以来心情如何呢？',
    responses: [
      '每天都很开心',
      '平平常常吧',
      '不开心的时间会多一些',
      '大部分时间都不太开心',
    ],
    type: 'button',
    status: 'suprise'
  },
  {
    prompt: '你近两周以来睡眠情况如何呢？',
    responses: [
      '每天醒来都感觉精力充沛',
      '作息规律，能正常休息',
      '感觉休息地不太好',
      '大部分夜晚都在失眠中度过',
    ],
    type: 'button',
    status: 'suprise'
  },
  {
    prompt: '你近两周以来吃得怎么样呢？',
    responses: [
      '胃口不错，吃得很愉快',
      '不好不坏',
      '无法控制,时而吃得多,时而吃得少',
    ],
    type: 'button',
    status: 'suprise'
  },
  {
    prompt: '你近两周以来人际交往情况如何呢？',
    responses: [
      '无论是社交还是独处，我都很开心',
      '不好不坏',
      '回避人际交往或者在不断的活动中麻痹自己',
    ],
    type: 'button',
    status: 'suprise'
  },
  {
    prompt: '谢谢你的真诚，再次欢迎你来到到赛沃灵世界',
    responses: ['好的'],
    type: 'button',
    status: 'flower'
  },
]

export { introList }
