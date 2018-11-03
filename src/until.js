export function counter(tarT){
        let now=new Date(),
            nowT=now.getTime()
        let time=tarT-nowT;
        if(time<=0){
            window.clearInterval(timer)
            return ;
        }

        let h=Math.floor(time/3600000);
        time-=3600000*h;
        
        let m=Math.floor(time/60000);
        time-=60000*m;
        
        let s=Math.floor(time/1000);
        
        return [h,m,s]
    }