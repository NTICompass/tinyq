tinyq
=====

## Informtion ##
tinyq is a JavaScript function queue.  It supports passing arguments
into the functions in the queue before they are run.

## Basic Instructions ##
Create a queue object.

    var Q = new q;

Add functions to it.

    Q.add(function(next, varA, varB){
       console.log(varA);
       next(varB);
    });
    
    Q.add(function(next, varA){
       console.log(varA);
    });

Get its length;

    alert(Q.length);

Start the queue.

    Q.run('a', 'b');
