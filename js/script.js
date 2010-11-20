/*
 * Authors: Kai Chang and Mary Becica
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
 */

$(function() {

  // Header pulldown
  var headspace = 0;
  $('header a').toggle(
    function() {
      if (headspace != 1) {
        $(this).addClass('active');
        $('header').animate({
          top : "+=150"
        }, 500, function() {
          headspace++;
        })
      }
    }, 
    function() {
      if (headspace != 0) {
        $(this).removeClass('active');
        $('header').animate({
          top : "-=150"
        }, 500, function() {
          headspace--;
        });
      }
  });

  // Footer pullup
  var footspace = 0;
  $('footer a').toggle(
    function() {
      if (footspace != 1) {
        $(this).addClass('active');
        $('footer').animate({
          bottom : "+=150"
        }, 500, function() {
          footspace++;
        })
      }
    }, 
    function() {
      if (footspace != 0) {
        $(this).removeClass('active');
        $('footer').animate({
          bottom : "-=150"
        }, 500, function() {
          footspace--;
        });
      }
  });

  // Meta pullup
  var metaspace = 0;
  $('.meta a').toggle(
    function() {
      if (metaspace != 1) {
        $(this).addClass('active');
        $('.meta').animate({
          bottom : "+=100"
        }, 500, function() {
          metaspace++;
        })
      }
    }, 
    function() {
      if (metaspace != 0) {
        $(this).removeClass('active');
        $('.meta').animate({
          bottom : "-=100"
        }, 500, function() {
          metaspace--;
        });
      }
  });

  $('.wave').click( function() {
    list     = $(this).parent();
    col      = list.parent();
    selected = list.children('.selected');

    num      = list.attr('id').substring(5);
    nextnum  = ++num;
    nextlist = $('#list-' + nextnum);
    
    nextcol  = nextlist.parent();

    /* TEMPORARY */
    if ( $('#hello').is(':visible') ) {
      $('#hello').hide();
    }
      
    if ( $(this).hasClass('selected') ) {
      list.removeClass('grey');
      selected.removeClass('selected'); 
    }
    else {
      nextlist.fadeIn(235);
      list.addClass('grey');
      selected.removeClass('selected'); 
      $(this).addClass('selected');
    }

    if ( col.attr('id') == 'rightcol' ) {
      colwidth = col.width();
      $('#leftcol').attr('id', '');
      $('#midcol').attr('id', 'leftcol');
      $('#rightcol').attr('id', 'midcol');
      nextcol.attr('id', 'rightcol');
      $('#content').animate({left : '-=' + colwidth}, 340);
    }

  });


});

