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
//头部
function Header(opt){
	this.box=opt.box;
    this.nav=opt.nav;
    this.header='';
    this.html='';
    this.cur=opt.cur||0;

    this.init();
}
Header.prototype={
	constructor:Header,
	init(){
		this.bind();
	},
	bind(){
		for(var key in this.nav){
           this.html+=`<a class="mui-control-item" href="${this.nav[key]}">${key}<i></i><b></b></a>`;
        }
		this.header=`
		    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
		        <div class="mui-scroll">
		            ${this.html}
		        </div>
		    </div>
		    <div class="headopera">
		        <div class="headsearch"><a class="mui-icon mui-icon-search"></a></div>
		        <div class="headmenu"><a class="mui-icon mui-icon-bars"></a></div>
		    </div>`
		 $(this.box).html(this.header);
        $('.mui-scroll a').removeClass('mui-active');
        $('.mui-scroll a').eq(this.cur-1).addClass('mui-active');
	}
}
