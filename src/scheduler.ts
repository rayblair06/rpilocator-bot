import { ToadScheduler, SimpleIntervalJob, AsyncTask } from 'toad-scheduler';

export const scheduler = async (action: any, interval: number) => {
    // Scheduler test
    // https://github.com/kibertoad/toad-scheduler
    const scheduler = new ToadScheduler();
    
    const task = new AsyncTask(
        'task',
        action,
        console.error
    );
    
    const job = new SimpleIntervalJob(
        { seconds: interval, runImmediately: true },
        task,
        'task'
    );
    
    // create and start jobs
    scheduler.addSimpleIntervalJob(job);
}

