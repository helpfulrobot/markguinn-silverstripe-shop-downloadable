/**
 * @author Mark Guinn <mark@adaircreative.com>
 * @date 10.31.2013
 * @package shop_downloadable
 */
(function ($, window, document, undefined) {
	'use strict';
	$(function(){
		$('#download-sort').on('change', function(){
			document.location.search = '?sort=' + $(this).val();
		});
	});
}(jQuery, this, this.document));