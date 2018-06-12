function Footer(opt){
  this.box=$(opt.box);
    this.html='';
    this.cur=opt.cur||0;
    this.init();
}
Footer.prototype={
    constructor:Footer,
    init(){
        this.Render()
    },
    Render(){
       this.html=`<div class="common_footer">
            <a href="index.html">
                <span></span>
                <p>首页</p>
            </a>
            <a href="finecourse.html">
                <span></span>
                <p>学堂</p>
            </a>
            <a href="register.html">
                <span></span>
                <p>注册</p>
            </a>
            <a href="bbs.html">
                <span></span>
                <p>问答</p>
            </a>
            <a href="user.html">
                <span></span>
                <p>我的</p>
            </a>
        </div>` ;
        this.box.html(this.html);
        $('.common_footer a').remove('cur')
        $('.common_footer a').eq(this.cur).addClass('cur')
    }
};
