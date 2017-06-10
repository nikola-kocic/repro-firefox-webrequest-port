First, serve `public` folder using web server on port 8000.

If you have Python installed, just enter `public` folder and run the following command:

Python 3: `python3 -m http.server 8000`

Python 2: `python2 -m SimpleHTTPServer 8000`


Then, enter `webext` directory and run `web-ext run`

In Firefox that just opened, open Browser Console (Ctrl+Shift+J) and visit http://127.0.0.1:8000/

Bug is that line `Loading (with port): http://127.0.0.1:8000/styles.css` is not printed
