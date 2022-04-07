import os

os.system('source ./backend/bin/activate')
os.chdir('frontend')
os.system('yarn build')
os.chdir('../backend/include')
os.system('flask run')