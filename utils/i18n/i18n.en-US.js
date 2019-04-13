export const map = new Map([
    [`主站`, `Home`],
    [`画友`, `Painting`],
    [`音频`, `Music`],
    [`游戏中心`, `Game`],
    [`直播`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Live`,
    }],
    [`会员购`, `Shop`],
    [`漫画`, `Comic`],
    [`下载APP`, `APP`],
    [`大会员`, `VIP`],
    [`年度大会员`, `Annual VIP`],
    [`消息`, `Message`],
    [`动态`, `Activity`],
    [`稍后再看`, `Watchlater`],
    [`已加稍后再看`, `Added`],
    [`移除`, `Remove`],
    [`收藏`, `Favorite`],
    [`历史`, `History`],
    [`投稿`, `Upload`],
    [`关注`, [
        `Follow`,
        {
            selector: `.user-panel .text, .n .n-data .n-data-k`,
            text: `Following`,
        },
    ]],
    [`关注数`, `Following`],
    [`粉丝`, `Followers`],
    [`粉丝数`, `Followers`],
    [`已关注`, `Following`],
    [`回复我的`, `Reply`],
    [`@我的`, `@Mentioned`],
    [`收到的赞`, `Likes`],
    [`系统通知`, `System`],
    [`我的消息`, `Whisper`],
    [`主页`, `Home`],
    [`频道`, `Channel`],
    [`订阅`, `Subscriptions`],
    [`设置`, `Settings`],
    [`搜索`, `Search`],
    [`搜索视频`, `Search videos`],
    [`搜索设置项`, `Search settings`],
    [`查看全部`, `View more`],
    [`查看更多`, `View more`],
    [`视频`, `Video`],
    [`专栏`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Column`,
    }],
    [`转发`, `Forward`],
    [`评论`, `Reviews`],
    [`赞`, `Like`],
    [`视角：`, `View: `],
    [`我自己`, `Myself`],
    [`新访客`, `New visitors`],
    [`我的粉丝`, `Followers`],
    [`暂时没有新动态了哦！`, `Nothing new at this moment...`],
    [`历史动态`, `History`],
    [`投稿了`, `posted`],
    [`更新了`, `updated`],
    [`番剧`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Bangumi`,
    }],
    [`样式`, `Style`],
    [`工具`, `Tools`],
    [`触摸`, `Touch`],
    [`其他`, `Other`],
    [`附加功能`, `Add-on features`],
    [`空空如也哦...`, `Nothing...`],
    [`正在直播`, `Live broadcasting`],
    [`投稿视频`, `Posted video`],
    [`展开全文`, `Expand`],
    [`动画`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Anime`,
    }],
    [`科技`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Tech`,
    }],
    [`游戏`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Game`,
    }],
    [`生活`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Life`,
    }],
    [`国创`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Native`,
    }],
    [`音乐`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Music`,
    }],
    [`舞蹈`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Dance`,
    }],
    [`数码`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Digital`,
    }],
    [`鬼畜`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Kichiku`,
    }],
    [`时尚`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Fashion`,
    }],
    [`广告`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Ads`,
    }],
    [`娱乐`, [
        {
            selector: `.elevator-module .nav-list .item`,
            not: true,
            text: `Entertainment`,
        },
        {
            selector: `.primary-menu .nav-menu li .nav-name`,
            text: `Entmt`
        },
    ]],
    [`电影`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Movie`,
    }],
    [`TV剧`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `TV drama`,
    }],
    [`影视`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Film`,
    }],
    [`纪录片`, {
        selector: `.elevator-module .nav-list .item`,
        not: true,
        text: `Documentary`,
    }],
    [`放映厅`, `Cinema`],
    [`广场`, `Plaza`],
    [`小黑屋`, `Blackroom`],
    /* Your translation here */
    [`*`, [
        /* CSS translation here */

    ]],
]);
export const regex = new Map([
    /* Regex translation here */
]);
export default {
    export: { map, regex },
};