child process :
            Single-threaded, non-blocking performance in Node.js works great for a single process. But eventually, one 
            process in one CPU is not going to be enough to handle the increasing workload of your application.
            No matter how powerful your server may be, a single thread can only support a limited load.

            The fact that Node.js runs in a single thread does not mean that we can’t take advantage of multiple processes 
            and, of course, multiple machines as well.
            We can easily spin a child process using Node’s child_process module and those child processes can easily 
            communicate with each other with a messaging system.

            The child_process module enables us to access Operating System functionalities by running any system command 
            inside a, well, child process.
            We can control that child process input stream, and listen to its output stream. We can also control the 
            arguments to be passed to the underlying OS command, and we can do whatever we want with that command’s output.
            
            Child processes always have three streams child.stdin, child.stdout, and child.stderr which may be shared with 
            the stdio streams of the parent process

The following are the four different ways to create a child process in Node.js:

spawn() method
fork() method
exec() method
execFile() method

spawn() method: 
            This method spawns a new process using the given command and the command line arguments in args. The 
            ChildProcess instance implements EventEmitterAPI which enables us to register handlers for events on child 
            object directly. Some events that can be registered for handling with the ChildProcess are exit, disconnect, 
            error, close and message.

    Syntax:
            child_process.spawn(command, [ args], [ options])

        Parameters:
            command: Accepts a string which is the command to run.
            args: List of string arguments. Default value is an empty array.
            options:
                shell: Accepts a boolean value. If true, runs command inside of a shell. Different shell can be specified 
                as a string. Default value is false which implies no shell. By default, spawn() does not create a shell to 
                execute the command hence it is important to pass it as option while invoking the child process.
                Additional options such as cwd, env, argv0, stdio etc can be used as per requirement.

        Return Value: Returns a ChildProcess object.

fork() method: 
        The child_process.fork() is a special case of child_process.spawn() where the parent and the child process can 
        communicate with each other via send(). The fork() allows separation of computation-intensive tasks from the main 
        event loop. Child processes are independent of the parent except the IPC communication channel established between 
        them. Each process has its own memory, therefore invoking a large number of child processes can affect the 
        performance of the application. The shell option is not supported by child_process.fork().

        Syntax:

            child_process.fork(modulePath[, args][, options])
        Parameters:

            modulePath: Accepts a string that specifies the module to run in the child.
            args: List of string arguments.
            options: cwd, detached, env, execPath, execArgv are some of the available options for this method.
        Return Value: Returns a ChildProcess instance.


exec() method: 
        This method creates a shell first and then executes the command.

        Syntax:
            child_process.exec(command[, options][, callback])

        Parameters:

            command: Accepts a string that specifies the command to run with space-separated arguments.
            options: Some of the options available are cwd, env, encoding, shell, timeout etc
            callback: The callback function is called when process terminates. The arguments to this function are error, 
            stdout and stderr respectively.
        Return Value: Returns an instance of ChildProcess.


execFile() method: 
        The child_process.execFile() function is does not spawn a shell by default. It is slightly more efficient than 
        child_process.exec() as the specified executable file is spawned directly as a new process.

        Syntax:
            child_process.execFile(file[, args][, options][, callback])

        Parameters:

            file: Accepts a string that specifies the name or path of the file to run.
            args: List of string arguments.
            options: Some of the options available are cwd, env, encoding, shell, timeout etc
            callback: The callback function is called when process terminates. The arguments to this function are error, 
            stdout and stderr respectively.
            
        Return Value: Returns an instance of ChildProcess.