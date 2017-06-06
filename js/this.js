/*global console, alert, confirm, prompts*/
/*
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
*/
$('.client-logo, .clients-mobile-nav span').on('click', function() {
            console.log('gggg');
            var $this = $(this),
                $siblings = $this.parent().children(),
                $position = $siblings.index($this);
            $('.client-unit').removeClass('active-client').eq($position).addClass('active-client');
            $siblings.removeClass('active-client');
            $this.addClass('active-client');
        });

        // next - prev buttons

        $('.next, .prev').on('click', function() {
            var $this = $(this),
                $currActiveClient = $('.clients-belt').find('.active-client'),
                $position = $('.clients-belt').children().index($currActiveClient),
                $clientNum = $('.client-unit').length;

                if($this.hasClass('next')) {
                    if($position < $clientNum - 1 ) {
                        $('.active-client').removeClass('active-client').next().addClass('active-client');
                    } else {
                        $('.client-unit').removeClass('active-client').first().addClass('active-client');
                        $('.client-logo').removeClass('active-client').first().addClass('active-client');
                    }
                } else {

                    if( $position === 0 ) {
                        $('.client-unit').removeClass('active-client').last().addClass('active-client');
                        $('.client-logo').removeClass('active-client').last().addClass('active-client');
                    } else {

                        $('.active-client').removeClass('active-client').prev().addClass('active-client');
                    }

                }

        });
