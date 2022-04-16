import os
import shutil

os.chdir('backend')
if os.path.exists('digihub.db'):
    os.remove('digihub.db')
os.chdir('../frontend')
if os.path.exists('dist/'):
    shutil.rmtree('dist/')
