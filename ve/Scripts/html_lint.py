#!c:\users\arpan\desktop\website_aavishkar\avskr2.0\ve\scripts\python.exe
# Copyright 2014 Deezer (http://www.deezer.com)
# Copyright 2015 Sebastian Kreft
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

"""html_lint.py

This HTML5 linter follows the style guide open sourced by Google
https://google-styleguide.googlecode.com/svn/trunk/htmlcssguide.xml.

It also extends the guide with some rules defined by the project
https://github.com/kangax/html-minifier.

This software is released under the Apache License. Copyright Deezer 2014.

Usage:
  html5_lint.py [--disable=DISABLE] FILENAME...
  html5_lint.py (-h | --help)
  html5_lint.py --version

Options:
  -h --help        Show this screen.
  --version        Show version.
  --disable=checks A comma separated list of checks to disable. Valid names are:
                   doctype, entities, trailing_whitespace, tabs, charset,
                   void_element, optional_tag, type_attribute,
                   concerns_separation, protocol, names,
                   capitalization, quotation, indentation, formatting,
                   boolean_attribute, invalid_attribute, void_zero,
                   invalid_handler, http_equiv, extra_whitespace.

"""

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function
from __future__ import unicode_literals

import sys

import docopt

import html_linter


__VERSION__ = '0.3.0'


if __name__ == '__main__':
    options = docopt.docopt(__doc__,
                            help=True,
                            version='html5_lint v%s' % __VERSION__)

    sys.exit(html_linter.main(options))
