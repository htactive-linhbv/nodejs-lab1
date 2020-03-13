function check(url,index){
    //xoa dau /
    if (url.lastIndexOf("/") === url.length-1){
        url = url.slice(0, url.length-1);
    }
    
    // get page theo từng trang
    switch(url){
        case "https://viblo.asia": {
            url=`${url}/newest?page=${index}`;    
            console.log(url);
            return url;
        };
        
    }
    
};
 

module.exports = check;
