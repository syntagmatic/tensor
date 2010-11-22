/*
 * Author: Kai Chang
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

  var deselect = function(nextlist, nextnextlist, list, selected) {
    nextnextlist.fadeOut();
    list.removeClass('grey');
    selected.removeClass('selected');
    nextlist.fadeOut(240, function() {
      nextlist.removeClass('grey');
      nextlist.children('.selected').removeClass('selected');
    });
  }
  var select = function(nextlist, list, selected, item) {
    list.addClass('grey');
    selected.removeClass('selected'); 
    item.addClass('selected');
    $('html').scrollTop(0);
    nextlist.fadeIn(235);
  }
  var reload = function(nextlist, nextnextlist, selected, item) {
    nextnextlist.fadeOut(300);
    selected.removeClass('selected'); 
    item.addClass('selected');
    nextlist.fadeOut(300, function() {
      nextlist.children('.selected').removeClass('selected');
      nextlist.removeClass('grey');
      // Change content here 
    } );
    $('html').scrollTop(0);
    nextlist.fadeIn();
  }
  var shiftleft = function(col, nextlist) {
    nextcol  = nextlist.parent();
    colwidth = col.width();
    $('#leftcol').attr('id', '');
    $('#midcol').attr('id', 'leftcol');
    $('#rightcol').attr('id', 'midcol');
    nextcol.attr('id', 'rightcol');
    $('#content').animate({left : '-=' + colwidth}, 340);
  }
  var shiftright = function(col, prevlist) {
    prevcol  = prevlist.parent();
    colwidth = col.width();
    $('#rightcol').attr('id', '');
    $('#midcol').attr('id', 'rightcol');
    $('#leftcol').attr('id', 'midcol');
    prevcol.attr('id', 'leftcol');
    $('#content').animate({left : '+=' + colwidth}, 340);
  }
  // Header pulldown
  // TODO: Abstract this code to keep things DRY
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

    numlist  = parseInt(list.attr('id').substring(5));

    nextnum  =  numlist + 1;
    nextlist = $('#list-' + nextnum);
    nextnextnum =  numlist + 2;
    nextnextlist = $('#list-' + nextnextnum);
    
    if ( numlist > 1 ) {
      prevnum  = numlist - 1;
      prevlist = $('#list-' + prevnum);
      if ( numlist > 2 ) {
        prevprevnum  = numlist - 2;
        prevprevlist = $('#list-' + prevprevnum);
      }
    }

    if ( col.attr('id') == 'rightcol' ) {
      shiftleft(col, nextlist);
      select(nextlist, list, selected, $(this));
    }
    else if ( col.attr('id') == 'midcol' ) {
      if ( $(this).hasClass('selected') ) {
        deselect(nextlist, nextnextlist, list, selected);
        if ( numlist > 2) {
          shiftright(col, prevprevlist);
        }
      } else if ( list.children().hasClass('selected') ) {
        reload(nextlist, nextnextlist, selected, $(this));
      } else {
        select(nextlist, list, selected, $(this));
      }
    }
    else if ( col.attr('id') == 'leftcol' ) {
      if ( $(this).hasClass('selected') ) {
        deselect(nextlist, nextnextlist, list, selected);
        if ( numlist > 1) {
          shiftright(col, prevlist);
        }
      } else if ( list.children().hasClass('selected') ) {
        reload(nextlist, nextnextlist, selected, $(this));
        if ( numlist > 1) {
          shiftright(col, prevlist);
        }
      } else {
        select(nextlist, list, selected, $(this));
      }
    }


  });


});

