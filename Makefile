# Watch stylus file for changes and recompile
.PHONY : default
default:
	mkdir -p css
	./node_modules/stylus/bin/stylus stylus/main.styl --use ./node_modules/nib/lib/nib --watch --out css

.PHONY : publish
publish:
	rsync -r -a -v -e "ssh -l feross -p 44444" --exclude ".git" --exclude ".DS_Store" --delete . future:/home/feross/www/filldisk.com