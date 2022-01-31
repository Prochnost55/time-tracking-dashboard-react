export const TIME_FRAMES = {
    DAILY: 'Daily',
    WEEKLY: 'Weekly',
    MONTHLY: 'Monthly',
}
export const CARD_TITLES = {
    WORK: 'Work',
    PLAY: 'Play',
    STUDY: 'Study',
    EXERCISE: 'Exercise',
    SOCIAL: 'Social',
    SELF_CARE: 'Self Care',
}
export const CARDS = [
    {
        title: CARD_TITLES.WORK,
        color: 'hsl(15, 100%, 70%)',
        imgSrc: './images/icon-work.svg',
    },
    {
        title: CARD_TITLES.PLAY,
        color: 'hsl(195, 74%, 62%)',
        imgSrc: './images/icon-play.svg',
    },
    {
        title: CARD_TITLES.STUDY,
        color: 'hsl(348, 100%, 68%)',
        imgSrc: './images/icon-study.svg',
    },
    {
        title: CARD_TITLES.EXERCISE,
        color: 'hsl(145, 58%, 55%)',
        imgSrc: './images/icon-exercise.svg',
    },
    {
        title: CARD_TITLES.SOCIAL,
        color: 'hsl(264, 64%, 52%)',
        imgSrc: './images/icon-social.svg',
    },
    {
        title: CARD_TITLES.SELF_CARE,
        color: 'hsl(43, 84%, 65%)',
        imgSrc: './images/icon-self-care.svg',
    },
]
export const TIMEFRAME_FORMAT_MAP = {
    'Daily': 'Day',
    'Weekly': 'Week',
    'Monthly': 'Month',
}