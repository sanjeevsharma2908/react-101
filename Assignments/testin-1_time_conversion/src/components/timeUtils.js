// timeUtils.js
 export function timeToHHMMSS(ms){
    if(ms < 0){
        return 'Invalid Input';
    }

    const seconds = Math.floor(ms/1000);
    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds%3600)/60)
    const remainingSeconds = seconds % 60;
    
    const timeStr = `${hours.toString().padStart(2,'0')}:
                    ${minutes.toString().padStart(2,'0')}:
                    ${remainingSeconds.toString().padStart(2,'0')}`;
    
                    return timeStr ;
 }